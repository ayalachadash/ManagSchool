import react from 'react';

class Header extends react.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const nameOfice = <header>Office of Ramot Jerusalem School</header>
        return <div>
        {nameOfice}
        <span>name:{this.props.officeDetails.name} </span>
        <span>address:{this.props.officeDetails.address} </span>
        <span>email:{this.props.officeDetails.email} </span>
        <span>openingHoures:{this.props.officeDetails.openingHoures} </span>
    </div>
    }
}

export default Header;