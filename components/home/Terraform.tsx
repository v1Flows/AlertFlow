import { Button } from "@nextui-org/react";

import { title, subtitle } from "@/components/primitives";

export default function HomeTerraform() {
  return (
    <main>
      <div className="flex flex-col items-center text-center">
        <h1 className={title({ size: "lg" })}>
          Versioned within{" "}
          <h1 className={title({ color: "blue", size: "lg" })}>Terraform.</h1>
        </h1>
        <h2 className={subtitle({ class: "mt-4 text-default-500" })}>
          Infrastructure as code to build, change, and version your AlertFlow
          experience. Now with our Terraform provider.
        </h2>
        <div className="mt-4">
          <Button
            isDisabled
            color="primary"
            radius="lg"
            size="sm"
            variant="flat"
          >
            Learn more
          </Button>
        </div>
      </div>
    </main>
  );
}
