import React from 'react'
import UserTable from '../UserTable';

interface Props {
  searchParams: {
    sortOrder: "name" | "email"
  };
}

const usersSortingPage = ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <h1>Users</h1>
      <UserTable sortBy={sortOrder} />
    </>
  )
}

export default usersSortingPage
