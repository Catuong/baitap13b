export default function App() {
  return (
    <div>
    <div className="p-7 space-y-7  ">
      <div className="border-gray-100 rounded-xl border bg-white p-4 max-w-md">
    <div className="flex gap-4">
      <div class="alert-check">
            <ion-icon name="checkmark-outline"></ion-icon>
        </div>
        <div className="">
            <h3 className="block font-medium text-gray-900">Changes saved</h3>
            <p className="text-gray-700">Your product changes have been saved.</p>
        </div>
        <div class="alert-close">
        <ion-icon name="close-outline"></ion-icon>
        </div>
    </div>
    </div>
    <div>
    <div className="bg-red-50 rounded border-s-4 border-red-500 bg-red-50 p-4 w-96">
        <div className="flex gap-4">
            <ion-icon name="warning-outline"></ion-icon>
            <p class="text-red-800 font-medium leading-6">Something went wrong</p>
        </div>
        <div className="mt-2 text-sm text-red-700 w-96 ">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Nemo quasi assumenda numquam deserunt consectetur 
                autem nihil quos debitis dolor culpa.</p>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}