import withAuth from '../components/withAuth';
import AddItemForm from '../components/AddItemForm';
import React from 'react';
import InventoryList from '../components/InventoryList';

const Page = () => {
  return (
    <main>
      <AddItemForm />
      <InventoryList />
    </main>
  );
};

export default withAuth(Page);
