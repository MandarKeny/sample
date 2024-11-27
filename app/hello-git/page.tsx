import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HelloGit() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">Hello Git!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600">
            Welcome to the world of version control.
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <span className="mr-2">📁</span>
              Repository
            </li>
            <li className="flex items-center">
              <span className="mr-2">🌿</span>
              Branch
            </li>
            <li className="flex items-center">
              <span className="mr-2">💾</span>
              Commit
            </li>
            <li className="flex items-center">
              <span className="mr-2">🔀</span>
              Merge
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

