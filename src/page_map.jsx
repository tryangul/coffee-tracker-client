// @flow

import React from 'react'
import { Route } from 'react-router'

import * as Pages  from  './page_index'

// maps

const pages= {
    login: {
        title: 'Login',
        open: true,
        path: '/login',
        component: Pages.Login,
    },

    signUp: {
        title: 'Sign Up',
        open: true,
        path: '/signUp',
        component: Pages.SignUp,
    },

    dashboard: {
        title: 'Dashboard',
        path: '/dashboard',
        component: Pages.Dashboard,
    },

    ordersDeliveries: {
        title: 'Orders and Deliveries',
        path: '/orders',
        component: Pages.OrdersDeliveries,
    },

    inventoryForm: {
        title: 'Take an Inventory',
        path: '/inventories/new',
        component: Pages.InventoryForm,
    },
    
    consumption: {
        title: 'Inventory and Consumption',
        path: '/inventories',
        component: Pages.Consumption,
    },
}


const indexComponent = pages.login.component

// utils

function buildProps(pageKey) {
    const { path, component, ...props } = pages[pageKey] // eslint-disable-line
    return props
}

function routes() {
    return Object.keys(pages).map(pageKey => {
        const { component, id, path } = pages[pageKey]
        const props = buildProps(pageKey)
        return <Route path={path} component={component} key={id} {...props} />
    })
}


export {
    pages,
    indexComponent,
    buildProps,
    routes,
}