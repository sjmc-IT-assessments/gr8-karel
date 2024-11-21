// src/components/KarelSection/index.tsx
export default function KarelSection() {
  return (
    <div className="w-full h-screen flex flex-col">
      {/* CodeHS iframe */}
      <div className="flex-1">
        <iframe
          src="https://codehs.com/student/4986733/section/508517/assignment/157085920"
          className="w-full h-full border-0"
          title="Karel Exercise"
        />
      </div>

      {/* Code submission text area */}
      <div className="p-4 bg-gray-100">
        <p className="mb-2">Copy your final code here to submit:</p>
        <textarea
          className="w-full h-32 p-2 border rounded"
          placeholder="Paste your Karel code here..."
          name="entry.123456789" // Update with your Google Form field ID
        />
      </div>
    </div>
  )
}