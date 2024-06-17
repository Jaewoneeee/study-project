"use client";
import React from "react";
import Button from "@/components/ui/Button";
import Text from "@/components/ui/Text";
import { useEffect, useState } from "react";

export default function TestPage() {
    const [count, setCount] = useState(0);
    const [loadingTest, setLoadingTest] = useState(true);

    const plusCount = () => {
        setCount(count + 1);
    };

    const buttonRef = React.useRef<HTMLButtonElement>(null);

    const handleClick = () => {
        if (buttonRef.current) {
            buttonRef.current.focus();
        }
    };

    return (
        <>
            <div>테스트 메인 페이지</div>
            <Button variant={"green"} size={"small"} onClick={plusCount}>
                {count}
            </Button>
            <Button variant={"blue"} size={"small"}>
                버튼
            </Button>
            <Button variant={"default"} size={"medium"} loading={loadingTest}>
                버튼
            </Button>
            <Button variant={"white"} size={"large"} fullWidth>
                버튼
            </Button>
            <Button variant={"green"} size={"large"} disabled>
                버튼
            </Button>

            <div>
                <button ref={buttonRef}>Click Me</button>
                <button onClick={handleClick}>Focus the other button</button>
            </div>
            {/* <Text as={"span"} size={"xl"}>
                텍스트
            </Text> */}
        </>
    );
}
