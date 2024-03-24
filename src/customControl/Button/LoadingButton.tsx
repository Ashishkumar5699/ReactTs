import { Button } from '@mui/material'
import {useState} from 'react';
interface ILoadingButtonProps {
  onClick: () => void;
  text: string;
  isBuzy: boolean
}
const [isBusy, setisBusy] = useState(false);

//function
// busy =true
//onClick()
//busy false
export const LoadingButton = (props: ILoadingButtonProps) => {
  const { onClick, text, isBuzy } = props;
  // const [isBusy, setisBusy] = useState(false);
  
  // const Action = async () =>
  // {
  //   setisBusy(true)
  // await onClick()
  //   setisBusy(false)
  // } 
  return (
    <Button onClick={() => onClick()} disabled={isBuzy}>
        { isBuzy ? text : "Loading..." }
    </Button>

  )
}
