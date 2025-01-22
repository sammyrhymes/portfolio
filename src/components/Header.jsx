export default function Header() {
  return (
    <div className="flex items-center justify-between font-sans text-xs">
        <div className="flex items-center gap-2">
            <p className="text-primary-500">samuelmwendwa5996@gmail.com</p>
            <div className="px-4 py-2 bg-white rounded-full">copy</div>
            <div className="px-4 py-2 bg-white rounded-full">cv</div>
        </div>
        <div className="flex gap-1">
            <p>LinkedIn</p>
            <p>/</p>
            <p>Github</p>
        </div>
    </div>
  )
}
