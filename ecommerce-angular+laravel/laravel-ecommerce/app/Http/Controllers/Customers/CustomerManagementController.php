<?php

namespace App\Http\Controllers\Customers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Customers\CustomersModel;

class CustomerManagementController extends Controller {

        private $_modelCostumers;

        public function __construct() {
             $this->_modelCostumers = new CustomersModel();
        }

        public function listCustomers(Request $request) {
            try{
                $filter = $request->all();
                if (array_key_exists('filter', $filter) && $filter['filter']){
                    return response()->json(['SUCCESS' => 'true', 'customers' => $this->_modelCostumers->filterCustomers($filter)]);
                }else{
                    return response()->json(['SUCCESS' => 'true', 'customers' => $this->_modelCostumers->listCustomers()]);
                }
            }catch(\Exception $e){
                return response()->json(['ERROR' => 'true', 'error' => $e->getMessage()]);
            }
        }

        public function register(Request $request) {
          try{
                $data = $request->all();
                $this->_modelCostumers->customerRegister($data);
                return response()->json(['SUCCESS' => 'true', 'message' => 'Customer Registered!']);
          }catch(\Exception $e){
                return response()->json(['ERROR' => 'true', 'error' => $e->getMessage()]);
          }
        }

        public function countCostumers() {
            try{
                return response()->json(['SUCCESS' => 'true', 'count' => $this->_modelCostumers->countCostumers()]);
            }catch(\Exception $e){
                return response()->json(['ERROR' => 'true', 'error' => $e->getMessage()]);
            }
        }

        public function updateCustomer(Request $request) {
            $data = $request->all();
            $this->_modelCostumers->updateCustomer($data);
            return response()->json(['SUCCESS' => 'true', 'message' => 'Customer Updated!']);
        }

        public function deleteCustomer (Request $request) {
            try{
                $data = $request->all();
                $this->_modelCostumers->deleteCustomer($data);
                return response()->json(['SUCCESS' => 'true', 'message' => 'Customer Deleted!']);
            } catch(\Exception $e){
                return response()->json(['ERROR' => 'true', 'error' => $e->getMessage()]);
            }
        }
}
