import { baseNameSvg } from "../../internal/svg/baseNameSvg";
import { cn, pressable, text } from "../../styles/theme";
import { useName } from "../../identity/hooks/useName";
import { base } from "viem/chains";

type WalletDropdownBaseNameReact = {
  className?: string;
};

export function WalletDropdownBaseName({
  className,
}: WalletDropdownBaseNameReact) {
  // BUG: Currently returning the ENS name when the base name is being displayed
  const { data: baseName, isLoading } = useName({
    address: "0x4bEf0221d6F7Dd0C969fe46a4e9b339a84F52FDF",
    chain: base,
  });

  let hasBaseUserName = false;
  if (baseName) {
    hasBaseUserName = true;
  }

  let title: string;
  let href: string;

  if (hasBaseUserName) {
    title = "Go to profile";
    href = `https://www.base.org/name/${baseName}`;
  } else {
    title = "Claim a Basename";
    href = "https://www.base.org/names";
  }

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
        <span className={cn(text.body, "shrink-0")}>{title}</span>
        {!hasBaseUserName && (
          <span className="ml-2 text-[#4F46E5] text-center font-inter text-[0.6875rem] font-bold leading-6 uppercase bg-[#E0E7FF] rounded-full px-2">
            NEW
          </span>
        )}
      </div>
    </a>
  );
}
