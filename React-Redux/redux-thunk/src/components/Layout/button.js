import { Button } from "@mui/material";
import {styled} from "@mui/material/styles";

const MyButton = styled(Button)(() => ({

}));

export const RoundedButton = styled(MyButton)(() => ({
    borderRadius: '23px'
}));

export default MyButton;