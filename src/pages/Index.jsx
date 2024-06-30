import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart } from "lucide-react";

function Index() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div>
        <h1 className="text-3xl text-center">Consumer Sentiment Dashboard</h1>
        <p className="text-center">
          Track consumer sentiment for different brands.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Brand A</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart className="h-6 w-6" />
            <p>Sentiment Score: 75%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Brand B</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart className="h-6 w-6" />
            <p>Sentiment Score: 60%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Brand C</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart className="h-6 w-6" />
            <p>Sentiment Score: 85%</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default Index;