import AuthForm from '@/components/AuthForm'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const SignUp = async () => {
  const loggedInUser = await getLoggedInUser();
  console.log(loggedInUser)

  return (
    <section className="flex-center size-full max-sm">
      <AuthForm type="sign-up"/>
    </section>
  )
}

export default SignUp