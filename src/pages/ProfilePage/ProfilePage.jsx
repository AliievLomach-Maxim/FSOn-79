import React from 'react'
import Profile from '../../components/Profile/Profile'
import EditProfileForm from '../../components/Forms/EditProfileForm/EditProfileForm'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfileThunk } from '../../store/auth/thunks'
import { profileSelect } from '../../store/auth/selectors'

const ProfilePage = () => {
	const profile = useSelector(profileSelect)
	const dispatch = useDispatch()

	const handleUpdate = (body) => {
		dispatch(updateProfileThunk({ body, id: profile._id }))
	}
	return (
		profile && (
			<>
				<Profile profile={profile} />
				<EditProfileForm update={handleUpdate} profile={profile} />
			</>
		)
	)
}

export default ProfilePage
