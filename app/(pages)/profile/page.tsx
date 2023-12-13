export default function Profile() {
  return (
    <div className="text-white">
      <div className="flex gap-10">
        <div className="w-44 h-44 bg-white rounded-full"></div>
        <div className="grow">
          <h1 className="text-3xl text-center">Profile</h1>
          <div className="w-full flex flex-wrap relative p-4">
            <label htmlFor="name" className="w-1/2 px-2">
              <p className="font-bold text-gray-300/80 text-sm ml-1">Name</p>
              <input
                type="text"
                name="name"
                id="name"
                className="input w-full"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
