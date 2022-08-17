import HomeHeader from "../homeHeader";
import Footer from "../footer";
import Script from 'next/script'


const menu = [
	{
		title:"Inicio",
		url:'/'
	},
	{
		title:"Eventos",
		url:'/eventos'
	}
]
const Layout = ({children} : JSX.ElementChildrenAttribute) => {
  return (
    <>
		<Script type="text/javascript" src="https://checkout.wompi.co/widget.js"></Script>

      <HomeHeader title={"Barnaby Jones"} sections={menu} />
      {children}
      <Footer />
    </>
  )
}

export default Layout;
