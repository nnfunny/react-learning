package nam.nguyen.springkotlin.datasource.mock

import nam.nguyen.springkotlin.datasource.BankDataSource
import nam.nguyen.springkotlin.model.Bank
import org.springframework.stereotype.Repository

@Repository
class MockBankDataSource: BankDataSource {
    val banks = listOf(
        Bank("1234", 1.0, 1),
        Bank("1010", 1.0, 1),
        Bank("2012", 1.0, 1),
    )
    override fun retrieveBanks(): Collection<Bank> = banks
}