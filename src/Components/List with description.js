/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Check() {
  return (
    <fieldset className="space-y-5">
      <legend className="sr-only">Notifications</legend>
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id="comments"
            aria-describedby="comments-description"
            name="comments"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium text-gray-700">
            Math
          </label>
          <p id="comments-description" className="text-gray-500">
            Start Quiz about math.
          </p>
        </div>
      </div>
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id="candidates"
            aria-describedby="candidates-description"
            name="candidates"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="candidates" className="font-medium text-gray-700">
            History
          </label>
          <p id="candidates-description" className="text-gray-500">
            Start Quiz about history.
          </p>
        </div>
      </div>
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            id="offers"
            aria-describedby="offers-description"
            name="offers"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="offers" className="font-medium text-gray-700">
            Sports
          </label>
          <p id="offers-description" className="text-gray-500">
            Start Quiz about sports.
          </p>
        </div>
      </div>
    </fieldset>
  )
}
