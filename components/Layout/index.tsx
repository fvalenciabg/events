import HomeHeader from "../homeHeader";
import Footer from "../footer";

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
      <HomeHeader title={"Barnaby Jones"} sections={menu} />
      {children}
      <Footer />
    </>
  )
}

export default Layout;
