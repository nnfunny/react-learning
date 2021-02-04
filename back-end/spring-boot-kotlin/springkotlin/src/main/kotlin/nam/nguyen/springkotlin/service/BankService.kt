package nam.nguyen.springkotlin.service

import nam.nguyen.springkotlin.datasource.BankDataSource
import nam.nguyen.springkotlin.model.Bank
import org.springframework.stereotype.Service

@Service
class BankService(private val dataSource: BankDataSource) {

    fun getBanks() : Collection<Bank> = dataSource.retrieveBanks()
    fun getBank(accountNumber: String): Bank = dataSource.retrieveBank(accountNumber)
}