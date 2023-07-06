import { RouteUrl } from "@/models/constants";
import { useRouter } from "next/router";
import { memo, useEffect } from "react";

const Home = () => {
    const router = useRouter();

	useEffect(() => {
        router.push(RouteUrl.LOGIN, RouteUrl.LOGIN, { locale: "en" });
	}, []);

	return (
		<>
		</>
	)
}

export default memo(Home);