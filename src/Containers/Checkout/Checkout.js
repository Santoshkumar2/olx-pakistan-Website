import React from "react";
import "./Checkout.css"
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FooterPagePro from './../../Components/Footer/Footer'

import Header from './../../Components/Header/Header';
import SubHeader from './../../Components/SubHeader/subHeadre'
import NavbarPage from './../../Components/Navbar/Navbar';

const Checkout = () => {
    return (
        <div>

            <Header />
            <SubHeader />
            <NavbarPage />

            <Grid container justify="center" >
                <Grid item lg={6} xs={12}>
                    <div style={{ justifyContent: "center", alignItems: "center", border: "0% 1% 0 0", padding: "5% 0% 0% 10%" }}>
                        <img alt="a" width="287px" height="60px" src="https://cdn.shopify.com/s/files/1/0272/0409/1949/t/3/assets/logo.png?3450" />
                        <br /><br />
                        <span>Cart</span>
                        <span>Informition</span>
                        <span>Shiping </span>
                        <span>Payment</span><br /><br />
                        <span className="two2" >Contact Information</span>
                        <span className="two" >Already have an account?Log in</span>
                        <br /><br />
                        <TextField className="ContactInformation" label="Email" variant="outlined" />
                        <br /><br />
                        <input type="checkbox" />
                        <span>Keep me up to date on news and exclusive offers</span>
                        <br /><br />
                        <h6>Shipping address</h6>
                        <br />
                        <TextField className="firstlastname" label="Address" variant="outlined" />
                        <TextField className="firstlastname2" label="City" variant="outlined" />
                        <br /><br />
                        <TextField className="ContactInformation" label="Address" variant="outlined" />
                        <br /><br />
                        <TextField className="ContactInformation" label="City" variant="outlined" />
                        <br /><br />
                        <TextField className="firstlastname" value="Pakistan" label="Country" variant="outlined" />
                        <TextField className="firstlastname2" type="number" label="Postal Code" variant="outlined" />
                        <br /><br />
                        <TextField type="number" className="ContactInformation" label="Phone" variant="outlined" />
                        <br /><br /><input type="checkbox" />
                        <span>Save this information for next time</span>
                        <br /><br />
                        <span>Back to Card</span>  <Button className="button">Continue to Shiping</Button>
                        <br />
                        <br />


                    </div>

                </Grid>


                <Grid item lg={6} xs={12} >
                    <div style={{ justifyContent: "center", alignItems: "center", backgroundColor: "#fafafa", padding: "5% 0% 0% 10%" }}>


                        <table>
                            <tr>
                                <td className="imgtd">
                                    <img  alt="a" style={{ borderRadius: "7%", border: "1px solid black" }} width="85%" height="12%" src="https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/c6/04/00/shutterstock-735206098.jpg" />

                                </td>
                                <td className="secondtd"> Eggs laying Walking Hen</td>
                                <td> Rs.1,245.00</td>

                            </tr>

                           


                            <tr>
                                <td className="imgtd">
                                    <img  alt="a"  style={{ borderRadius: "7%", border: "1px solid black" }} width="85%" height="12%" src="https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/c6/04/00/shutterstock-735206098.jpg" />

                                </td>
                                <td className="secondtd"> Eggs laying Walking Hen</td>
                                <td> Rs.1,245.00</td>

                            </tr>

                           


                            <tr>
                                <td className="imgtd" >
                                    <img  alt="a" style={{ borderRadius: "7%", border: "1px solid black" }} width="85%" height="12%" src="https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/c6/04/00/shutterstock-735206098.jpg" />
                                </td>
                                <td > Eggs laying Walking Hen</td>
                                <td> Rs.1,245.00</td>

                            </tr>
                         


                        </table>

                        <TextField type="number" className="DiscountCode" label="Discount Code" variant="outlined" />
                        <Button className="applyButton">Apply</Button>
                        <br />
                        <br />

                        <hr />

                        <span>  Subtotal </span>
                        <span className="values" > Rs.3,680.00</span>

                        <br />
                        <br />

                        <span>  Subtotal </span>
                        <span className="values" > Rs.3,680.00</span>
                        
                        <hr />

                        <br />

                        <span>  Subtotal </span>
                        <span className="values" > Rs.3,680.00</span>
                        <br />
                        <br />
                        <br />
                        <br />


                    </div>
                </Grid>


            </Grid>
            <FooterPagePro />
        </div>
    )
}

export default Checkout;