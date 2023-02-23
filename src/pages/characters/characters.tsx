import { useState, useEffect, useMemo } from "react";
import { getCharacters} from "../../../src/api/characterApi";
import { CharacterCard } from "../../components/сard/card"
import  {ICharacterData}  from "../../api/characterApi/index";

import { Grid } from "@mui/material";
import SearchCharacter from "../../components/searchCharacter/searchCharacter";

function Characters() {
  const [cards, setCardsData] = useState([]);

  useEffect(() => {
    getCharacters().then((res: any) => setCardsData(res.results));
  }, []);
  console.log(cards);

  const memoCards = useMemo(() => {
    return (
         <Grid
            container
            spacing={2}
            p={1}
            sx={{ justifyContent: "center", flexDirection: "column",alignItems:"center", mt: 3 }}
        >
          <Grid item sx={{alignItems: "center", width: "250px"}} >
            <SearchCharacter/>
          </Grid>
          <Grid item  container spacing={2}
            p={1}
            sx={{ justifyContent: "center", mt: 3 }}>

        {cards.map((card : ICharacterData ) => (
          <p>
            <CharacterCard           
              name={card.name}
              image={card.image}
              gender={card.gender}
              species={card.species}
              status={card.status}
              id={card.id}
              ></CharacterCard>
          </p>
        ))}
          </Grid>

        </Grid>
    );
  }, [cards]);

  return <div>{cards.length ? memoCards : "Cards are loading..."}</div>;
}


export default Characters 