import React from "react";
import { baseNameSvg } from "../../internal/svg/baseNameSvg";
import { cn, pressable, text } from "../../styles/theme";
import { useName } from "../../identity/hooks/useName";
import { base } from "viem/chains";
import { Spinner } from '../../internal/components/Spinner';

type WalletDropdownBaseNameReact = {
  className?: string;
};

export function WalletDropdownBaseName({
  className,
}: WalletDropdownBaseNameReact) {
  const { data: baseName, isLoading } = useName({
    address: "0x4bEf0221d6F7Dd0C969fe46a4e9b339a84F52FDF",
    chain: base,
  });

  const hasBaseUserName = !!baseName;

  let title = hasBaseUserName ? "Go to profile" : "Claim a Basename";
  let href = hasBaseUserName
    ? `https://www.base.org/name/${baseName}`
    : "https://www.base.org/names";

  return (
    <a
      className={cn(
        pressable.default,
        "flex items-center px-4 py-2",
        className
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {baseNameSvg && <div className="h-5 w-5 mr-2">{baseNameSvg}</div>}
      <div className="flex items-center">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <span className={cn(text.body, "shrink-0")}>{title}</span>
            {!hasBaseUserName && (
              <span className="ml-2 text-[#4F46E5] text-center font-inter text-[0.6875rem] font-bold leading-6 uppercase bg-[#E0E7FF] rounded-full px-2">
                NEW
              </span>
            )}
          </>
        )}
      </div>
    </a>
  );
}

export default WalletDropdownBaseName;