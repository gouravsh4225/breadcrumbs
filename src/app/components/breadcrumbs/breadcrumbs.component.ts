import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, PRIMARY_OUTLET ,Params} from '@angular/router';
import { filter } from 'rxjs/operators';
import { Location } from '@angular/common'

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent  {
  breadcrumbs:any;
  // breadcrumbs$=;
  constructor(private router:Router,
    private ActiveRoute:ActivatedRoute,private Location:Location) { 
    const ROUTE_DATA_BREADCRUMB: string = "title";
    this.router.events.subscribe((location:any)=>{
      if(Location.path() != ''){
        
        this.breadcrumbs=this.Location.path().split('/');
        console.log(this.breadcrumbs)
      }
    })
this.router.events.subscribe((res:any)=>{
      if(res instanceof NavigationEnd){
        let root = this.ActiveRoute.root;
        // console.log('root',root)
      //  this.getBreadcrumbs(root);
      }
    })
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe((res:any)=>{
        // this.buildBreadCrumb(this.ActiveRoute.root)
      })
      
  }
  buildBreadCrumb(route: ActivatedRoute, url: string = '',
  breadcrumbs=[]) {
const label = route.routeConfig ? route.routeConfig.data[ 'title' ] : 'Home';
const path = route.routeConfig ? route.routeConfig.path : '';
const nextUrl = `${url}${path}/`;
const breadcrumb = {
label: label,
url: nextUrl
};
// const newBreadcrumbs = [ ...breadcrumbs, breadcrumb ];
if (route.children) {
  console.log(route.children)
  let children = route.children;
  children.forEach(Childrouters=>{
    console.log('routes',Childrouters)
    let url = "/" + Childrouters.snapshot.url.map(urls=>urls.path);
  })
// return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
}
// return newBreadcrumbs;
}
//  private getBreadcrumbs(route:ActivatedRoute){
//   this.breadcrumbs = [];
// console.log('route',this.ActiveRoute.root)
//     const ROUTE_DATA_BREADCRUMB: string = "title";
//   let  url = '';
//     let children: ActivatedRoute[] = route.children;
//     if( children.length === 0 ){
//       return this.breadcrumbs.push({
//         title:"home",
//         url:''
//       })
//     }
//     children.forEach(routes => {
//       if(routes.outlet ==='primary'){
//         console.log('true',routes.outlet)
//         const RouteSnapshot = routes.snapshot;
//         url = '/' + RouteSnapshot.url.map(segment => segment.path);
//         console.log('url',url)
//         console.log(this.breadcrumbs)
//         this.breadcrumbs.push({
//           title: routes.snapshot.data.title,
//           url: url
//         });
//         console.log(this.breadcrumbs,'breadcrumbs')
//       }
//     });
//   }
Navigate(url,data){
 var navigateArray=[]
console.log('url',url,data)
var fixex = data.filter(filterUrl=>{
  console.log(filterUrl)
  navigateArray.push(filterUrl +'/');
  console.log(navigateArray,'navigateArray')
  if(filterUrl === url){
    console.log('true');
   var stringify=navigateArray.toString();
   console.log(stringify,'stringify')
   console.log(stringify.split(','),'hhhh');
  }
}
  )
console.log('fixex',fixex)
}
}
