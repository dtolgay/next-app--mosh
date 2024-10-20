import React, { Suspense } from 'react'
import UserTable from '../UserTable';

interface Props {
  searchParams: {
    sortOrder: "name" | "email"
  };
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <UserTable sortBy={sortOrder} />
    </>
  )
}

export default UsersPage
