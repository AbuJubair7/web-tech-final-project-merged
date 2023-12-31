import { Spinner } from "flowbite-react"

const MySpinner = () => {
  return (
    <div className="w-full text-center mt-4">
    <Spinner color="failure" aria-label="Center-aligned Extra large spinner example" size="xl" />
    </div>
  )
}
export default MySpinner