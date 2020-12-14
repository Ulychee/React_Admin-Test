import * as React from 'react'
import {makeStyles} from '@material-ui/styles'
import { Launch } from '@material-ui/icons'

const useStyle= makeStyles({
  link:{
    textDecoration:'none',
    color:'red'
  },
  icon:{
    width:'0.5em',
    paddingLeft:2
  }
})

const MyUrlField = ({record={},source}) => {
  const classes = useStyle()

  return (
    <div> 
      <a href={record[source]} className={classes.link}>
        {record[source]}
        <Launch className={classes.icon} />
      </a>
    </div>
  )
}

export default MyUrlField;