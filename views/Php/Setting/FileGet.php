<?php
$fileList = glob('../../../DATA/**/*.pdf');
$data = array();
$i = 0;
foreach ($fileList as $filename) {
    if (is_file($filename)) {
        $i++;
        // $data[explode('/', $filename)[4]] = explode('/', $filename)[5];
        if (isset($_GET["data"])) {
            echo explode('/', $filename)[4] . "||" . explode('/', $filename)[5] . ';;;:;;;';
        } else {
?>
            <tr id="File-<?php echo "F" . $i ?>" Style="cursor:pointer" class=" active-row">

                <td data-testidfile=<?php echo "F" . $i ?> id="GroupeFile-<?php echo "F" . $i ?>"><?php echo explode('/', $filename)[4] ?></td>
                <td data-testidfile=<?php echo "F" . $i  ?> id="NomFile-<?php echo "F" . $i ?>"><?php echo explode('/', $filename)[5] ?></td>

                <td class="controleTd">
                    <span class="btnControl btnControlDelete" data-testidfile=<?php echo "F" . $i ?> id="delete-File-<?php echo "F" . $i ?>"><i class="icon-TRASH "></i></span>
                    <span class="btnControl btnControlCancel hidden" data-testidfile=<?php echo "F" . $i ?> id="cancel-File-<?php echo "F" . $i ?>"><i class="icon-CLOSE "></i></span>
                    <span class="btnControl btnControlConfirm hidden" data-testidfile=<?php echo "F" . $i ?> id="confirm-File-<?php echo "F" . $i ?>"><i class="icon-CHECK "></i></span>
                </td>
            </tr>

            <script>
                $(`#delete-File-<?php echo "F" . $i ?>`).off("click").on('click', deleteFile)
                $(`#cancel-File-<?php echo "F" . $i ?>`).off("click").on('click', cancelDeletionFile)
                $(`#confirm-File-<?php echo "F" . $i ?>`).off("click").on('click', confirmDeletionFile)
            </script>
<?php
        }
    }
}
// print_r($data["Groupe 1 (Surnav)"]);
