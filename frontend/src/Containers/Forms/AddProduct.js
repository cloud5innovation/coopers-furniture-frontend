import React, { useState } from 'react';
import {withRouter} from "react-router-dom";
import {useDispatch} from "react-redux"
import {storage} from "./../../firebaseConfig";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Button from '@material-ui/core/Button';
import {addProduct} from "./../../Store/Actions/products";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid green",
    },
    textFieldWide: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "416px",
        justifyContent: "left"
      },
      btn: {
        margin: "2rem auto",
        color: "white",
        width: "10%",
        // backgroundColor: `${purpleColor}`,
        borderRadius: 0,
        // "&:hover": {
        //   backgroundColor: `${purpleColor}`,
    
        // }
    },
}))
const AddProduct = props => {
    const classes = useStyles();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    // eslint-disable-next-line
    const [image_url, setImageUrl] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [item_number, setItemNumber] = useState(0);
    const [supplier, setSupplier] = useState("");
    const [file, setFile] = useState(null);
    const [previewImg, setPreviewImg] = useState("");
    const photoInp = React.createRef();
    const dispatch = useDispatch();

    const uploadImage = event => {
        event.preventDefault();
        let currentProductName = "jewelry-image-" + Date.now();
        let metaData = {contentType: "image/jpeg"}
        let uploadImage = storage.ref(`images/${currentProductName}`).put(file, metaData);
    
        uploadImage.on(
          "state_changed",
          (snapshot) => {
            let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% done`);
            // switch(snapshot.state) {
            //     case storage.TaskState.PAUSED:
            //         console.log(`Upload Paused`);
            //         break;
            //     case storage.TaskState.RUNNING:
            //         console.log(`Upload is running`);
            //         break;
            // }
          },
          error => {
            alert(error.message);
          },
          () => {
            storage
              .ref("images")
              .child(currentProductName)
              .getDownloadURL()
              .then(url => {
                console.log(url);
                console.log(image_url)
                const productObj = {
                  title: title,
                  description: description,
                  price: price,
                  image_url: url,
                  category: category,
                  quantity: quantity,
                  item_number: item_number,
                  supplier: supplier
                };
                dispatch(addProduct(productObj));
                // props.history.push("/")
              });
          }
        );

       
    }
    
   
    const fileHandler = e => {
        e.persist();
        if (e.target.files[0]) {
            console.log("image preview: ", e.target.files[0])
          setFile(() => e.target.files[0]);
          setPreviewImg(e.target.files[0].name);
        }
      };

      console.log("image", file);
      console.log("preview", previewImg)
    return (
        <Grid className={classes.root}>
            <form>
                <TextField
                    className={classes.textFieldWide}
                    id="title"
                    type="text"
                    label="Product Title"
                    margin="dense"
                    variant="outlined"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />  
                 <TextField
                    className={classes.textFieldWide}
                    id="description"
                    type="text"
                    label="Product Description"
                    margin="dense"
                    variant="outlined"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />  
                 <TextField
                    className={classes.textFieldWide}
                    id="price"
                    type="text"
                    label="Price"
                    margin="dense"
                    variant="outlined"
                    value={price}
                    placeholder="$"
                    onChange={e => setPrice(e.target.value)}
                /> 
           
                 <Input
                    id="image-upload"
                    accept="image/*"
                    name="image"
                    type="file"
                    onChange={e => fileHandler(e)}
                    value={image_url}
                    margin="normal"
                    ref={photoInp}
                    label="image upload"
                />
                 <TextField
                    className={classes.textFieldWide}
                    id="category"
                    type="text"
                    label="category"
                    margin="dense"
                    variant="outlined"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                />  
                 <TextField
                    className={classes.textFieldWide}
                    id="quantity"
                    type="text"
                    label="quantity"
                    margin="dense"
                    variant="outlined"
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                />
                 <TextField
                    className={classes.textFieldWide}
                    id="itemNumber"
                    type="text"
                    label="item number"
                    margin="dense"
                    variant="outlined"
                    value={item_number}
                    onChange={e => setItemNumber(e.target.value)}
                /> 
                 <TextField
                    className={classes.textFieldWide}
                    id="supplier"
                    type="text"
                    label="supplier"
                    margin="dense"
                    variant="outlined"
                    value={supplier}
                    onChange={e => setSupplier(e.target.value)}
                />          
            </form>
            <Button className={classes.btn} type="submit" variant="contained" onClick={uploadImage}>Submit</Button>
        </Grid>
    )
};

export default withRouter(AddProduct);