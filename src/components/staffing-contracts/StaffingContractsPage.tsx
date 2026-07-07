import ContractExpertise from "./ContractExpertise";
import ContractServices from "./ContractServices";
import ContractsCta from "./ContractsCta";
import ContractsHero from "./ContractsHero";
import ContractsIntro from "./ContractsIntro";

export default function StaffingContractsPage() {
  return (
    <main className="bg-white">
      <ContractsHero />
      <ContractsIntro />
      <ContractServices />
      <ContractExpertise />
      <ContractsCta />
    </main>
  );
}
