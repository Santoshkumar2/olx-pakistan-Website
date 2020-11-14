import React from 'react'
import Grid from '@material-ui/core/Grid';
import './Blog.css'

import Header from './../../Components/Header/Header';
import SubHeader from './../../Components/SubHeader/subHeadre'
import NavbarPage from './../../Components/Navbar/Navbar';
// import FooterPagePro from './../../Components/Footer/Footer';


export default class Blog2 extends React.Component {
    render() {
        return (
            <div>


                <Header path={this.props.history} />
                <SubHeader />
                <NavbarPage path={this.props.history} />

                <div style={{ marginTop: "4%" }}>


                    <Grid container justify="center" spacing={2}>



                        <Grid xl={12} lg={11} md={12} sm={12} container justify="center" spacing={3}>



                            <Grid item xl={12} lg={8} md={12} sm={12} xm={12}>


                                <h1>
                                    Toy Zone Care
                                </h1>



                               


                            </Grid>





                            <Grid lg={3}>

                                <h1>Recent Post</h1>

                                <div className="posts">
                                </div>
                            </Grid>





                        </Grid>


                    </Grid>
                </div>
            </div>
        )
    }
}