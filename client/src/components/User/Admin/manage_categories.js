import React from 'react';
import UserLayout from '../../../hoc/user';
import ManangeBrands from './manage_brands';
import ManageWoods from './manage_woods';

const MangeCategories = () => {
    return (
        <UserLayout>
            <ManangeBrands/>
            <ManageWoods/>
        </UserLayout>
    );
};

export default MangeCategories;