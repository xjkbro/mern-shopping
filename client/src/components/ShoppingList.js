import React, {useEffect, useContext} from 'react';
import { Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';

import {ItemContext} from '../context/ItemContext'


function ShoppingList() {
    const {items, getItems, addItem, deleteItem} = useContext(ItemContext)

    console.log(items)

    useEffect(()=>{
        getItems()
        console.log(items)
    },[])
    
    const handleDelete = (e,item) => {
        deleteItem(item._id)
    }
    const provideInput = (e) => {
        const name = prompt('Enter Item')
            if(name) {
                addItem({id: uuidv4(), name})
            }
    }
    return (
        <Container>
            <Button 
                color="dark" 
                style={
                    {marginBottom: '2rem'}
                } 
                onClick={provideInput}
            > Add Item </Button>
            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {items.map((item) => (
                        <CSSTransition key={item._id} timeout={500} classNames='fade'>
                            <ListGroupItem>
                                <Button 
                                    className="remove-btn"
                                    color="danger" 
                                    size="sm" 
                                    onClick={(e) => handleDelete(e, item)}
                                > &times; </Button>
                                 {item.name}
                                </ListGroupItem>
                            </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>    
    ) 
}

export default ShoppingList

