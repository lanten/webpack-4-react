import React from "react"
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Route, Switch, Redirect
} from "react-router-dom"

import { pageRoutes } from '../routes'


export default class AppRouter extends React.Component {
  constructor() {
    super()
  }

  creatRoute(routeConfig, i = 0) {
    const { key = i, path, component: Comp, children, params = {} } = routeConfig

    if (children) {
      return (
        <Router key={key} exact>
          <React.Fragment>
            {/* <Route key={key} path={path} render={props => <Comp {...routeConfig} />} /> */}
            {/* <Switch> */}
            {children.map(this.creatRoute)}
            {/* </Switch> */}
          </React.Fragment>
        </Router>
      )
    } else {
      return <Route exact key={key} path={path} render={props => <Comp {...routeConfig} />} />
    }
  }

  render() {
    return this.creatRoute(pageRoutes)
    // return (
    //   <Router>
    //     <Switch>
    //       {this.creatRoute(pageRoutes)}
    //       {/* <Route key={key || i} path={path} render={props => {
    //         const Comp = component
    //         return <Comp {...props} params={params} />
    //       }} />
    //       {pageRoutes.children && pageRoutes.children.map(({ key, path, component, params = {} }, i) => {
    //         console.log(path)
    //         return <Route key={key || i} path={path} render={props => {
    //           const Comp = component
    //           return <Comp {...props} params={params} />
    //         }} />
    //       })} */}
    //       {/* <PageRoute component={NoMatch} type="404" /> */}
    //     </Switch>
    //   </Router>
    // )
  }


} // --- 

const PageRoute = ({ component: Component, ...rest }) => {
  console.log(Component)
  // 路由配置中的 params 可以配置默认参数
  return (
    <Route {...rest} render={props => {

      if (global.isLogin) {
        return (
          <App params={rest.params || {}}>{<Component {...props} params={rest.params || {}} />}</App>
        )
      } else {
        return (
          <Redirect to={{
            pathname: cfg.appname + '/login',
            state: { from: { ...props.location, ...rest.params } }
          }} />
        )
      }

    }} />
  )
}