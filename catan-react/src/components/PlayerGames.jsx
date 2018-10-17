import React from 'react'
import { Avatar, List } from 'antd'

function borderColor(pg_color) {
  let style = { borderRadius: "4px", padding: "3px", backgroundColor: pg_color }
  if (pg_color === "white") {
    style.border = "1px solid lightgray"
  }

  return style
}

const PlayerGames = ({player_games}) =>
  <List>
    {/* TODO: Adjust height of list items depending on # of players?
      Or possibly make 2 rows */}
    {player_games.map((pg) => {
      return(
        <List.Item style={{ padding: "2px 0" }}>
          <Avatar
            shape="square"
            size={50}
            src="https://github.com/nate-r-a/catan-website/blob/master/app/assets/images/sheep.png?raw=true"
            style={borderColor(pg.color)}
          />

        <div style={{ paddingLeft:"7px", fontSize:"24px", lineHeight:"50px" }}>
          {pg.player_name}
        </div>
        </List.Item>
      )
    })}
  </List>

export default PlayerGames
