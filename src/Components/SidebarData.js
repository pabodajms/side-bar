import React from "react";
import '../App.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import HiveIcon from '@mui/icons-material/Hive';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';

export const SidebarData = [
    {
        title : "Dashboard",
        icon : <DashboardIcon/>,
        link : "/admin-dashboard"
    },
    {
        title : "Users",
        icon : <SupervisorAccountIcon/>,
        link : "/users"
    },
    {
        title : "Products",
        icon : <HiveIcon/>,
        link : "/products"
    },
    {
        title : "Orders",
        icon : <AddShoppingCartIcon/>,
        link : "/orders"
    },
    {
        title : "Categories",
        icon : <CategoryIcon/>,
        link : "/categories"
    }
]


