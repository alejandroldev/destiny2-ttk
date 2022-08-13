import { useEffect, useState } from "react";
import { DestinyManifestSlice } from "bungie-api-ts/destiny2";
import { getDefinitions } from "../../services/api";
import { DestinyDefinition } from "../../services/types";
// import styles from "./index.module.scss";

type TDefinitions = DestinyManifestSlice<DestinyDefinition[]>;

function Table() {
  const [definitions, setDefinitions] = useState<TDefinitions>();

  useEffect(() => {
    getDefinitions().then((value) => setDefinitions(value));
  }, []);

  const tmp = () => {
    const items = definitions?.DestinyInventoryItemDefinition;
    if (items) {
      for (const item of Object.values(items)) {
        const id = 9; //DestinyItemSubType.HandCannon
        if (item.itemCategoryHashes?.includes(id)) {
          console.log(item);
        }
      }
    }
  };

  tmp();

  return <>Hi!</>;
}

export default Table;
