import { useEffect, useState } from "react";
import {
  DestinyInventoryItemStatDefinition,
  DestinyManifestSlice,
} from "bungie-api-ts/destiny2";
import { getDefinitions } from "../../services/api";
import { DestinyDefinition } from "../../services/types";
import styles from "./index.module.scss";

type TDefinitions = DestinyManifestSlice<DestinyDefinition[]>;

function Table() {
  const [definitions, setDefinitions] = useState<TDefinitions>();

  useEffect(() => {
    getDefinitions().then((value) => setDefinitions(value));
  }, []);

  const getStatName = (hash: number) => {
    const items = definitions?.DestinyStatDefinition;
    if (items) {
      const result = Object.values(items).find((item) => item.hash === hash);
      return result?.displayProperties.name;
    }
  };

  const renderStats = (stats: DestinyInventoryItemStatDefinition[] | null) => {
    return stats?.map((stat, index) => {
      return (
        <div key={index}>
          {getStatName(stat.statHash)} {stat.value}
        </div>
      );
    });
  };

  const renderWeapons = () => {
    // console.log(definitions?.DestinyItemCategoryDefinition);
    const items = definitions?.DestinyInventoryItemDefinition;
    if (items) {
      const filtered = Object.values(items).filter((item) =>
        item.itemCategoryHashes?.includes(8)
      );
      // console.log(filtered);
      return filtered.map((item, index) => {
        return (
          <tr key={index}>
            <td>{item.hash}</td>
            <td>
              <img
                src={`https://www.bungie.net${item.displayProperties.icon}`}
                alt=""
              />
            </td>
            <td>{item.displayProperties.name}</td>
            <td>
              {renderStats(
                item.stats?.stats ? Object.values(item.stats?.stats) : null
              )}
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <div className={styles["table"]}>
      <table>
        <tbody>{renderWeapons()}</tbody>
      </table>
    </div>
  );
}

export default Table;
