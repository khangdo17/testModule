<?php

declare(strict_types=1);

namespace ExampleModule;

use Atro\Core\ModuleManager\AbstractModule;

/**
 * Class Module
 */
class Module extends AbstractModule
{
    /**
     * @inheritdoc
     */
    public static function getLoadOrder(): int
    {
        return 9999;
    }
}
