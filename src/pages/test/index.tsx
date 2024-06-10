"use client";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import { useEffect, useState } from "react";

export default function TestPage() {
    const [count, setCount] = useState(0);
    const [loadingTest, setLoadingTest] = useState(true);

    const plusCount = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        setTimeout(() => {
            setLoadingTest(false);
        }, 3000);
    }, []);

    return (
        <>
            <div>테스트 메인 페이지</div>

            <Button variant={"green"} size={"xsmall"} onClick={plusCount}>
                {count}
            </Button>
            <Button variant={"blue"} size={"small"}>
                버튼
            </Button>
            <Button variant={"default"} size={"medium"} isLoading={loadingTest}>
                버튼
            </Button>
            <Button variant={"white"} size={"large"} fullWidth>
                버튼
            </Button>

            <Button variant={"green"} size={"xlarge"} disabled>
                버튼
            </Button>

            <Text as={"span"} size={"xl"}>
                텍스트
            </Text>
        </>
    );
}
