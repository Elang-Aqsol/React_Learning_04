import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CardWithForm() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px] bg-gray-900 dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-white dark:text-white">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
              <Label htmlFor="username" className="text-white dark:text-white">
                Username
              </Label>
              <Input
                type="text"
                placeholder="Username"
                className="bg-gray-800 dark:bg-gray-700 text-white dark:text-white"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-5">
              <Label htmlFor="password" className="text-white dark:text-white">
                Password
              </Label>
              <Input
                type="password"
                placeholder="Password"
                className="bg-gray-800 dark:bg-gray-700 text-white dark:text-white"
              />
            </div>
            <div className="flex justify-end mt-5">
              <Button
                variant="outline"
                className="bg-gray-800 dark:bg-gray-700 text-white dark:text-white"
              >
                Login
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          <p className="mr-2 text-white dark:text-white">
            Make new Account
            <Button variant="link" className="text-white dark:text-white">
              Register
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
