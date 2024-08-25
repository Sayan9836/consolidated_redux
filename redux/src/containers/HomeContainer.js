import React from 'react'
import Home from '../components/Home'
import { connect } from 'react-redux'
import { addToCart,removeToCart } from '../services/actions/Action'
//export default Home;
const mapStateToProps=state=>({
   data:state.cardItems
})

const mapDispatchToProps=dispatch=>({
    addTocartHandler:data=>dispatch(addToCart(data)),
    removeTocartHandler:data=>dispatch(removeToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)