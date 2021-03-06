import React from 'react'

import EditButton from './EditButton.client'

export default function AuthButton({ children, login, ...props }) {
  if (login) {
    return (
      <EditButton {...props}>
        {children}
        {login.user_metadata.avatar_url && (
          <img
            src={login.user_metadata.avatar_url}
            alt="User Avatar"
            title={login.user_metadata.full_name}
            className="avatar"
          />
        )}
      </EditButton>
    )
  }

  return (
    <EditButton login {...props}>
      Login to {children}
    </EditButton>
  )
}
