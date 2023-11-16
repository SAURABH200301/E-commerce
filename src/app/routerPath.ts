import { CartComponent } from "./components/cart/cart.component";
import { DetailsComponent } from "./components/details/details.component";
import { HomeComponent } from "./components/home/home.component";
import { MainComponent } from "./components/main/main.component";
import { NopagefoundComponent } from "./components/nopagefound/nopagefound.component";



export const routerPath = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                title: 'Home',
                component: HomeComponent
            }
        ]
    }, {
        path: 'details/:id',
        component: DetailsComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: '**',
        component: NopagefoundComponent
    }
]