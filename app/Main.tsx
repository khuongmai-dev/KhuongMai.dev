import Greetings from '../components/homepage/Greeting'

export default function Home({ posts }) {
  return (
    <>
      <div className='className="divide-y dark:divide-gray-700" divide-gray-200'>
        <div className="space-y-2 md:my-4 md:space-y-5 md:pb-8 md:pt-6 xl:grid xl:grid-cols-3">
          <div className="space-y-6 md:space-y-8 md:pr-8 xl:col-span-2">
            <div className="flex-1 text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg md:leading-8">
              <Greetings />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
