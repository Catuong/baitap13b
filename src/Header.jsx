export default function Header() {
    return (
      <div>
        <div class="flex items-center justify-between">
        <div class="greeting">
            <h1 className="text-4xl font-bold text-gray-900">Welcome Back, Barry!</h1>
            <p className="mt-1.5 text-sm text-gray-500">Lets write a new blog post! 🎉</p>
        </div>
        <div class="flex gap-4">
            <a href="" className="text-gray-500 items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3">View Website <ion-icon name="expand-outline"></ion-icon></a>
                
            <a href="" className="font-medium rounded-lg bg-indigo-600 px-5 py-3 text-sm text-white">Create Post</a>
        </div>
        </div>
      </div>
    );
  }