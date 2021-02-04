package nam.nguyen.springkotlin.datasource.mock

import nam.nguyen.springkotlin.datasource.BankDataSource
import nam.nguyen.springkotlin.model.Bank
import org.springframework.stereotype.Repository

@Repository
class MockBankDataSource: BankDataSource {
    val banks = listOf(
        Bank("1234", 1.0, 1),
        Bank("1010", 2.0, 1),
        Bank("2012", 3.0, 1),
    )
    override fun retrieveBanks(): Collection<Bank> = banks
    override fun retrieveBank(accountNumber: String) : Bank =
        banks.firstOrNull() { it.accountNumber == accountNumber }
            ?: throw NoSuchElementException("Could not find a bank with account number $accountNumber")
}