import React from 'react'
import {useQuery} from 'react-query'
import {getAllUsers} from '../../Apis/post'

export default function Users() {

  const {isLoading, isError, data:users, error} = useQuery({
    queryKey:['users'],
    queryFn: getAllUsers 
  })


  return (
    <div>
    <h3>Users</h3>

<table className="table table-dark table-hover">
<thead>
<tr>
  
  <th scope="col">Name</th>
  <th scope="col">Email</th>
  <th scope="col">IsAdmin</th>

  
</tr>
</thead>
<tbody>
{users && users.map(user=>{
  return (
      <tr key={user._id}>
        <th scope="row">{user.fullname}</th>
        <td>{user.email}</td>
        <td>{user.isAdmin}</td>
        
      </tr>
  )
})}


</tbody>
</table>
</div>
  )
}
