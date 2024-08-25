import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/Header'
const mapStateToProps=state=>({
   data:state.cardItems
})

const mapDispatchToProps=dispatch=>({
    // addTocartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)