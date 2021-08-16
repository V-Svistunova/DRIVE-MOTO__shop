import s from "./Content.module.scss"

import Products from "../products/Products";
import { Rating } from "@material-ui/lab";
import { withStyles } from '@material-ui/core/styles';


function Content(props) {
  const StyledRating = withStyles({
    root: {
      fontSize: '30px'
    },

    iconFilled: {
      color: '#1C62CD'
    },
    iconEmpty: {
      color: '#C4C4C4'
    }
  })(Rating);

  return (
    <div className={s.Content}>
      <Products/>
      <StyledRating readOnly defaultValue={4}/>

    </div>      
  );
}

export default Content;